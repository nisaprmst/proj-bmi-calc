import { Spinner } from "react-bootstrap"

export const Loading = () => {

    return (
        <div style={{position:"fixed", top:"50%", left:"50%", zIndex:100}}>
              <Spinner variant="dark" animation="border" role="status">
                <span className="sr-only">Loading...</span>
              </Spinner>

            </div>
    )
}