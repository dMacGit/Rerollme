import PropTypes from 'prop-types'


const Header = ({title}) => {
    return (
        <div className="header-bar">
            <h1>{title}</h1>
        </div>
    )
}

Header.defaultProps = {
    title: 'Reroll Me',
}

Header.propTypes = {
    title: PropTypes.string.isRequired,
}

export default Header;