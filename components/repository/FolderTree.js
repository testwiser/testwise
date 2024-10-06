import FolderItem from "./FolderItem"

const FolderTree = () => {
  const folderStructure = [
    {
      folderName: 'Root Folder',
      isOpenable: true,
      subfolders: [
        {
          folderName: 'Subfolder 1',
          isOpenable: true,
          subfolders: [
            {
              folderName: 'Subfolder 1.1',
              isOpenable: false,
              subfolders: [],
            },
            {
              folderName: 'Subfolder 1.2',
              isOpenable: false,
              subfolders: [],
            },
          ],
        },
        {
          folderName: 'Subfolder 2',
          isOpenable: true,
          subfolders: [
            {
              folderName: 'Subfolder 2.1',
              isOpenable: true,
              subfolders: [
                {
                  folderName: 'Subfolder 2.1.1',
                  isOpenable: false,
                  subfolders: [],
                },
              ],
            },
          ],
        },
      ],
    },
  ];

  return (
    <ul className="menu menu-xs bg-base-200 rounded-lg w-full max-w-xs">
      {folderStructure.map((folder, index) => (
        <FolderItem
          key={index}
          folderName={folder.folderName}
          isOpenable={folder.isOpenable}
          subfolders={folder.subfolders}
        />
      ))}
    </ul>
  );
};

export default FolderTree;