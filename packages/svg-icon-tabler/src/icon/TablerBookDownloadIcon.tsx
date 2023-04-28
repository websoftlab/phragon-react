import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerBookDownloadIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerBookDownloadIcon = React.forwardRef<SVGSVGElement, TablerBookDownloadIconProps>(
	function TablerBookDownloadIcon(props, ref) {
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
				<path d="M12 20h-6a2 2 0 0 1 -2 -2v-12a2 2 0 0 1 2 -2h12v5" />
				<path d="M13 16h-7a2 2 0 0 0 -2 2" />
				<path d="M15 19l3 3l3 -3" />
				<path d="M18 22v-9" />
				{children}
			</SvgIcon>
		);
	}
);

if (__isDev__()) {
	TablerBookDownloadIcon.displayName = "TablerBookDownloadIcon";
}
