import "../Input/styles.scss"



export function Input() {
    return (
        <div className="input">
            <form>
                <input
                    type="text"
                    placeholder="00000-000"
                    maxLength={9}
                />
            </form>
        </div>
    )

}