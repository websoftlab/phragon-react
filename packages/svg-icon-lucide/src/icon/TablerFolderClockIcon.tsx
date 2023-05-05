import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerFolderClockIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerFolderClockIcon = React.forwardRef<SVGSVGElement, TablerFolderClockIconProps>(
	function TablerFolderClockIcon(props, ref) {
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
				<path d="M7 20H4a2 2 0 0 1-2-2V5c0-1.1.9-2 2-2h3.93a2 2 0 0 1 1.66.9l.82 1.2a2 2 0 0 0 1.66.9H20a2 2 0 0 1 2 2" />
				<path d="M22 16 A6 6 0 0 1 16 22 A6 6 0 0 1 10 16 A6 6 0 0 1 22 16" />
				<path d="M16 14v2l1 1" />
				{children}
			</SvgIcon>
		);
	}
);

if (__isDev__()) {
	TablerFolderClockIcon.displayName = "TablerFolderClockIcon";
}
