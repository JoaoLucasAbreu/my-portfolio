const colors = [
    '#ff0000', // red
    '#ff7f00', // orange
    '#ffff00', // yellow
    '#00ff00', // green
    '#0000ff', // blue
    '#4b0082', // indigo
    '#8b00ff', // violet
]

export default function Teste() {
    const items = Array.from({ length: 35 }, (_, i) => i)

    return (
        <section className="container">
            <h1>Vários Hello World (arco-íris)</h1>
            <div className="hello-list">
                {items.map((i) => (
                    <div
                        key={i}
                        className="hello-item"
                        style={{ color: colors[i % colors.length] }}
                    >
                        Hello World
                    </div>
                ))}
            </div>
        </section>
    )
}