import { readFile, writeFile } from '../utils/fileHandler.js';
import bcrypt from 'bcryptjs';

const userPath = './data/users.json';

export const getUsers = async () => await readFile(userPath);
export const saveUsers = async users => await writeFile(userPath, users);

export const createUser = async (email, password) => {
  const users = await getUsers();
  if (users.find(u => u.email === email)) throw new Error('Email exists');
  const hashedPassword = await bcrypt.hash(password, 10);
  const newUser = { id: crypto.randomUUID(), email, password: hashedPassword };
  users.push(newUser);
  await saveUsers(users);
  return newUser;
};

export const findUserByEmail = async email => {
  const users = await getUsers();
  return users.find(u => u.email === email);
};
