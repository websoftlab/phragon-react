import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerWorldDownloadIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerWorldDownloadIcon = React.forwardRef<SVGSVGElement, TablerWorldDownloadIconProps>(
	function TablerWorldDownloadIcon(props, ref) {
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
				<path d="M21 12a9 9 0 1 0 -9 9" />
				<path d="M3.6 9h16.8" />
				<path d="M3.6 15h8.4" />
				<path d="M11.578 3a17 17 0 0 0 0 18" />
				<path d="M12.5 3c1.719 2.755 2.5 5.876 2.5 9" />
				<path d="M18 14v7m-3 -3l3 3l3 -3" />
				{children}
			</SvgIcon>
		);
	}
);

if (__isDev__()) {
	TablerWorldDownloadIcon.displayName = "TablerWorldDownloadIcon";
}
