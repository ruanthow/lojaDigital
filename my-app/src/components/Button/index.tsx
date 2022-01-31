import "../Button/styles.scss"



export function Button() {
    return (
        <div className="button">
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