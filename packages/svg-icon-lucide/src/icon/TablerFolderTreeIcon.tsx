import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerFolderTreeIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerFolderTreeIcon = React.forwardRef<SVGSVGElement, TablerFolderTreeIconProps>(
	function TablerFolderTreeIcon(props, ref) {
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
				<path d="M13 10h7a1 1 0 0 0 1-1V6a1 1 0 0 0-1-1h-2.5a1 1 0 0 1-.8-.4l-.9-1.2A1 1 0 0 0 15 3h-2a1 1 0 0 0-1 1v5a1 1 0 0 0 1 1Z" />
				<path d="M13 21h7a1 1 0 0 0 1-1v-3a1 1 0 0 0-1-1h-2.88a1 1 0 0 1-.9-.55l-.44-.9a1 1 0 0 0-.9-.55H13a1 1 0 0 0-1 1v5a1 1 0 0 0 1 1Z" />
				<path d="M3 3v2c0 1.1.9 2 2 2h3" />
				<path d="M3 3v13c0 1.1.9 2 2 2h3" />
				{children}
			</SvgIcon>
		);
	}
);

if (__isDev__()) {
	TablerFolderTreeIcon.displayName = "TablerFolderTreeIcon";
}
