const HtmlPrinter = ({ htmlString }) => {
	// Convert special characters into HTML entities
	const escapeHtml = (str) => {
		return str
			.replace(/</g, "&lt;")
			.replace(/>/g, "&gt;")
			.replace(/"/g, "&quot;")
			.replace(/'/g, "&#39;");
	};

	return <pre style={{ whiteSpace: "pre-wrap", wordBreak: "break-word" }}>{escapeHtml(htmlString)}</pre>;
};

export default HtmlPrinter;