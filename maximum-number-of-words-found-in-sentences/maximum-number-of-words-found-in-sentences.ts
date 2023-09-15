function mostWordsFound(sentences: string[]): number {
    let mostWords = 0;

    for (const sentence of sentences) {
        const words = sentence.split(' ');

        if (words.length > mostWords) {
            mostWords = words.length;
        }
    }

    return mostWords;
};