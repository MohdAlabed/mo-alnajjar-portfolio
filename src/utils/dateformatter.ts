export const dateFormatter = (dateString: string | null): string => {
    if (!dateString) return 'Present';

    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
        month: 'short',
        year: 'numeric',
  });
};