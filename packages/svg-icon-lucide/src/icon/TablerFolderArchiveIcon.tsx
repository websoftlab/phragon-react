import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerFolderArchiveIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerFolderArchiveIcon = React.forwardRef<SVGSVGElement, TablerFolderArchiveIconProps>(
	function TablerFolderArchiveIcon(props, ref) {
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
				<path d="M22 20V8a2 2 0 0 0-2-2h-7.93a2 2 0 0 1-1.66-.9l-.82-1.2A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13c0 1.1.9 2 2 2h6" />
				<path d="M18 19 A2 2 0 0 1 16 21 A2 2 0 0 1 14 19 A2 2 0 0 1 18 19" />
				<path d="M16 11v-1" />
				<path d="M16 17v-2" />
				{children}
			</SvgIcon>
		);
	}
);

if (__isDev__()) {
	TablerFolderArchiveIcon.displayName = "TablerFolderArchiveIcon";
}
