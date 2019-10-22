export interface FileUploaded {
    name: string;
    bytesSize: number;
    content: Uint8Array;
    type: string;
}
