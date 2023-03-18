import cc from "classcat";

export function Modal({fade, heading, modalId, children}) {
    return (
        <div
            className={cc([fade ?? 'fade', 'modal'])}
            id={modalId}
            tabIndex="-1"
            aria-labelledby={modalId}
            aria-hidden="true"
        >
            <div className="modal-dialog">
                <div className="modal-content rounded-0">
                    <div className="modal-header">
                        <h5 className="modal-title" id={modalId}>{ heading }</h5>
                        <button
                            type="button"
                            className="btn-close"
                            data-bs-dismiss="modal"
                            aria-label="Close"
                        />
                    </div>
                    <div className="modal-body">
                        <div className="ratio ratio-16x9">
                            { children }
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}