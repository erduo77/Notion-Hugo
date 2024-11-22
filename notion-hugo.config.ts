import { UserConfig } from "./src/config"

const userConfig: UserConfig = {
    mount: {
        manual: false,
        page_url: 'https://erduoya.notion.site/1455bd7aa0b68018b66ed32ba9b3c0ad?v=1455bd7aa0b6812d9e08000ca6452a10&pvs=4',
        pages: [
            // {
            //     page_id: '<page_id>',
            //     target_folder: 'path/relative/to/content/folder'
            // }
            {
                page_id: '45eb121158b9489480ec000fd25c812b',
                target_folder: '.'
            }
        ],
        databases: [
            // {
            //     database_id: '<database_id>',
            //     target_folder: 'path/relative/to/content/folder'
            // }
            {
                database_id: 'b7b1816c05ec464391c8c111fa242985',
                target_folder: '.'
            }
        ],
    }
}

export default userConfig;
