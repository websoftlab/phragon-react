import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerFileReportIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerFileReportIcon = React.forwardRef<SVGSVGElement, TablerFileReportIconProps>(
	function TablerFileReportIcon(props, ref) {
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
				<path d="M17 17m-4 0a4 4 0 1 0 8 0a4 4 0 1 0 -8 0" />
				<path d="M17 13v4h4" />
				<path d="M12 3v4a1 1 0 0 0 1 1h4" />
				<path d="M11.5 21h-6.5a2 2 0 0 1 -2 -2v-14a2 2 0 0 1 2 -2h7l5 5v2m0 3v4" />
				{children}
			</SvgIcon>
		);
	}
);

if (__isDev__()) {
	TablerFileReportIcon.displayName = "TablerFileReportIcon";
}
