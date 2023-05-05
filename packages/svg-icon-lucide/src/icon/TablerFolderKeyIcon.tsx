import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerFolderKeyIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerFolderKeyIcon = React.forwardRef<SVGSVGElement, TablerFolderKeyIconProps>(
	function TablerFolderKeyIcon(props, ref) {
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
				<path d="M10 20H4a2 2 0 0 1-2-2V5c0-1.1.9-2 2-2h3.93a2 2 0 0 1 1.66.9l.82 1.2a2 2 0 0 0 1.66.9H20a2 2 0 0 1 2 2v2" />
				<path d="M18 20 A2 2 0 0 1 16 22 A2 2 0 0 1 14 20 A2 2 0 0 1 18 20" />
				<path d="m22 14-4.5 4.5" />
				<path d="m21 15 1 1" />
				{children}
			</SvgIcon>
		);
	}
);

if (__isDev__()) {
	TablerFolderKeyIcon.displayName = "TablerFolderKeyIcon";
}
