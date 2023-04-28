import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerFolderSymlinkIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerFolderSymlinkIcon = React.forwardRef<SVGSVGElement, TablerFolderSymlinkIconProps>(
	function TablerFolderSymlinkIcon(props, ref) {
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
				<path d="M3 21v-4a3 3 0 0 1 3 -3h5" />
				<path d="M8 17l3 -3l-3 -3" />
				<path d="M3 11v-5a2 2 0 0 1 2 -2h4l3 3h7a2 2 0 0 1 2 2v8a2 2 0 0 1 -2 2h-8" />
				{children}
			</SvgIcon>
		);
	}
);

if (__isDev__()) {
	TablerFolderSymlinkIcon.displayName = "TablerFolderSymlinkIcon";
}
