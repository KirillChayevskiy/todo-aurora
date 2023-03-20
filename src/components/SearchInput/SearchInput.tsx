import SearchIcon from "./SearchIcon";
import './SearchInput.css'
interface Props {
    value: string,
    onChange: (event: any) => void
}

function SearchInput({value, onChange}: Props) {
    return (
        <div className={'searchContainer'}>
            <div className={'iconContainer'}>
                <SearchIcon/>
            </div>
            <input
                className={'searchInput'}
                value={value}
                onChange={onChange}
            />
        </div>
    )
}

export default SearchInput
