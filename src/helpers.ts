import { MAX_TEXT_LENGTH } from './constants';

export function transformText(text: string) {
    const trimmedText = text.trim();

    if (trimmedText.length > MAX_TEXT_LENGTH) {
        return `${trimmedText.slice(0, MAX_TEXT_LENGTH)}...`;
    }

    return trimmedText;
}
