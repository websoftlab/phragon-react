import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerArchiveRestoreIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerArchiveRestoreIcon = React.forwardRef<SVGSVGElement, TablerArchiveRestoreIconProps>(
	function TablerArchiveRestoreIcon(props, ref) {
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
				<path d="M4 4 H20 A2 2 0 0 1 22 6 V7 A2 2 0 0 1 20 9 H4 A2 2 0 0 1 2 7 V6 A2 2 0 0 1 4 4 z" />
				<path d="M12 13v7" />
				<path d="m9 16 3-3 3 3" />
				<path d="M4 9v9a2 2 0 0 0 2 2h2" />
				<path d="M20 9v9a2 2 0 0 1-2 2h-2" />
				{children}
			</SvgIcon>
		);
	}
);

if (__isDev__()) {
	TablerArchiveRestoreIcon.displayName = "TablerArchiveRestoreIcon";
}
