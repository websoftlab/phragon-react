import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerFolderLockIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerFolderLockIcon = React.forwardRef<SVGSVGElement, TablerFolderLockIconProps>(
	function TablerFolderLockIcon(props, ref) {
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
				<path d="M10 20H4a2 2 0 0 1-2-2V5c0-1.1.9-2 2-2h3.93a2 2 0 0 1 1.66.9l.82 1.2a2 2 0 0 0 1.66.9H20a2 2 0 0 1 2 2v2.5" />
				<path d="M15 17 H21 A1 1 0 0 1 22 18 V21 A1 1 0 0 1 21 22 H15 A1 1 0 0 1 14 21 V18 A1 1 0 0 1 15 17 z" />
				<path d="M20 17v-2a2 2 0 1 0-4 0v2" />
				{children}
			</SvgIcon>
		);
	}
);

if (__isDev__()) {
	TablerFolderLockIcon.displayName = "TablerFolderLockIcon";
}
