import {
  LayoutDashboard,
  Layers,
  Inbox,
  User,
  Rocket,
  BookText,
  LifeBuoy,
} from "lucide-react";

import { Sidebar } from "flowbite-react";

const BlueIcon = (Icon) => {
  const WrappedIcon = () => <Icon className="text-blue-500" />;
  WrappedIcon.displayName = `BlueIcon(${Icon.displayName || Icon.name || 'Icon'})`;
  return WrappedIcon;
};

const SidebarMenu = () => {
  return (
    <Sidebar aria-label="Sidebar with content separator example" className="text-blue-500">
      <Sidebar.Items>
        <Sidebar.ItemGroup>
          <Sidebar.Item href="#" icon={BlueIcon(LayoutDashboard)}>
            Dashboard
          </Sidebar.Item>
          <Sidebar.Item href="/repository" icon={BlueIcon(Layers)}>
            Repository
          </Sidebar.Item>
          <Sidebar.Item href="#" icon={BlueIcon(Inbox)}>
            Inbox
          </Sidebar.Item>
          <Sidebar.Item href="#" icon={BlueIcon(User)}>
            Users
          </Sidebar.Item>
        </Sidebar.ItemGroup>

        <Sidebar.ItemGroup>
          <Sidebar.Item href="#" icon={BlueIcon(Rocket)}>
            Upgrade to Pro
          </Sidebar.Item>
          <Sidebar.Item href="#" icon={BlueIcon(BookText)}>
            Documentation
          </Sidebar.Item>
          <Sidebar.Item href="#" icon={BlueIcon(LifeBuoy)}>
            Help
          </Sidebar.Item>
        </Sidebar.ItemGroup>
      </Sidebar.Items>
    </Sidebar>
  );
};


export default SidebarMenu