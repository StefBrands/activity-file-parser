// import * as fs from 'fs/promises';
import * as path from 'path'

async function parseFITFile() {
    return "parse fit file";
}

async function parseTCXFile() {
    return "parse tcx file";
}


export default async function ActivityParser(file: string) {
    const ext = path.extname(file).toLowerCase();
    // const fileBuffer = await fs.readFile(file);

    if (ext === ".fit") {
        return parseFITFile()
    } else if (ext == '.tcx') {
        return parseTCXFile()
    } else {
        throw new Error('Unsupported file type. Only .fit and tcx. files are supported.')
    }
}