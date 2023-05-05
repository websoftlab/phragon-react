import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerFolderGitIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerFolderGitIcon = React.forwardRef<SVGSVGElement, TablerFolderGitIconProps>(
	function TablerFolderGitIcon(props, ref) {
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
				<path d="M4 20h16a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.93a2 2 0 0 1-1.66-.9l-.82-1.2A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13c0 1.1.9 2 2 2Z" />
				<path d="M14 13 A2 2 0 0 1 12 15 A2 2 0 0 1 10 13 A2 2 0 0 1 14 13" />
				<path d="M6 13 L10 13" />
				<path d="M14 13 L18 13" />
				{children}
			</SvgIcon>
		);
	}
);

if (__isDev__()) {
	TablerFolderGitIcon.displayName = "TablerFolderGitIcon";
}
