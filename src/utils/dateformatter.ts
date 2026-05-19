export const dateFormatter = (dateString: string | null): string => {
    if (!dateString) return 'On Hold';

    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
        month: 'short',
        year: 'numeric',
  });
};