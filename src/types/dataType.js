import PropTypes from 'prop-types'

export const type = {
    datas: PropTypes.arrayOf(PropTypes.shape({
        value: PropTypes.string.isRequired,
        text: PropTypes.string.isRequired
    })),
    chooseDatas: PropTypes.arrayOf(PropTypes.string.isRequired),
    onChange: PropTypes.func,
    selectDatas: PropTypes.string
}