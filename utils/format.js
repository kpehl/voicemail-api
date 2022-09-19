module.exports = {
    formatText: (text) => {
        return text.replace(/\w+@\w+\.\w+/, (match) => {
            return `<a href="mailto:${match}">${match}</a>`;
          });
    },
    formatPhone: () => {
        return;
    },
    formatDuration: () => {
        return;
    },
    formatDate: () => {
        return;
    }
}