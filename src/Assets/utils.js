export function calculatePercent (labeled, total) {
    return Math.floor((labeled/total)*100);
} 

export function roundof (value) {
    return (value*100).toFixed(2);
}