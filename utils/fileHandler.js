import { promises as fs } from 'fs';

export const readFile = async (filePath) => {
    try {
        const data = await fs.readFile(filePath, 'utf8');
        return JSON.parse(data || '[]');
    } catch {
        return [];
    }
};

export const writeFile = async (filePath, data) => {
    await fs.writeFile(filePath, JSON.stringify(data, null, 2));
};
