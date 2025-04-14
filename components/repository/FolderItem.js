import { useState } from 'react';
import { Folder, FolderOpen } from 'lucide-react';

const FolderItem = ({ folderName, isOpenable = false, subfolders = [] }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => setIsOpen(!isOpen);

  return (
    <li>
      {isOpenable ? (
        <details open={isOpen}>
          <summary onClick={handleToggle} className="flex items-center gap-2 cursor-pointer">
            {isOpen ? (
              <FolderOpen className="h-4 w-4 text-blue-500" />
            ) : (
              <Folder className="h-4 w-4 text-blue-500" />
            )}
            {folderName}
          </summary>

          {subfolders.length > 0 && (
            <ul className="ml-4">
              {subfolders.map((subfolder, index) => (
                <FolderItem
                  key={index}
                  folderName={subfolder.folderName}
                  isOpenable={subfolder.isOpenable}
                  subfolders={subfolder.subfolders}
                />
              ))}
            </ul>
          )}
        </details>
      ) : (
        <summary onClick={handleToggle} className="flex items-center gap-2 cursor-pointer">
          <Folder className="h-4 w-4 text-blue-500" />
          {folderName}
        </summary>
      )}
    </li>
  );
};

export default FolderItem;
