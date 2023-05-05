import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerFolderCogIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerFolderCogIcon = React.forwardRef<SVGSVGElement, TablerFolderCogIconProps>(
	function TablerFolderCogIcon(props, ref) {
		const { children, ...rest } = props;
		return (
			<SvgIcon
				stroke="currentColor"
				strokeWidth={2}
				strokeLinecap="round"
				strokeLinejoin="round"
				{...rest}
				ref={ref}
				size={24}
				icon={undefined}
				fill="none"
			>
				<path d="M10.5 20H4a2 2 0 0 1-2-2V5c0-1.1.9-2 2-2h3.93a2 2 0 0 1 1.66.9l.82 1.2a2 2 0 0 0 1.66.9H20a2 2 0 0 1 2 2v3" />
				<path d="M21 18 A3 3 0 0 1 18 21 A3 3 0 0 1 15 18 A3 3 0 0 1 21 18" />
				<path d="M18 14v1" />
				<path d="M18 21v1" />
				<path d="M22 18h-1" />
				<path d="M15 18h-1" />
				<path d="m21 15-.88.88" />
				<path d="M15.88 20.12 15 21" />
				<path d="m21 21-.88-.88" />
				<path d="M15.88 15.88 15 15" />
				{children}
			</SvgIcon>
		);
	}
);

if (__isDev__()) {
	TablerFolderCogIcon.displayName = "TablerFolderCogIcon";
}
