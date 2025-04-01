export function formatDate(isoString: string): string {
	const date = new Date(isoString);
	const options: Intl.DateTimeFormatOptions = {
		day: '2-digit',
		month: 'short',
		year: 'numeric',
	};
	return date.toLocaleDateString('es-ES', options).replace('.', '');
}
