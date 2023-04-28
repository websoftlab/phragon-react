import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerDownloadOffIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerDownloadOffIcon = React.forwardRef<SVGSVGElement, TablerDownloadOffIconProps>(
	function TablerDownloadOffIcon(props, ref) {
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
				<path d="M4 17v2a2 2 0 0 0 2 2h12a2 2 0 0 0 1.83 -1.19" />
				<path d="M7 11l5 5l2 -2m2 -2l1 -1" />
				<path d="M12 4v4m0 4v4" />
				<path d="M3 3l18 18" />
				{children}
			</SvgIcon>
		);
	}
);

if (__isDev__()) {
	TablerDownloadOffIcon.displayName = "TablerDownloadOffIcon";
}
