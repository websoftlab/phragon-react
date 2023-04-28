import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerTextCaptionIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerTextCaptionIcon = React.forwardRef<SVGSVGElement, TablerTextCaptionIconProps>(
	function TablerTextCaptionIcon(props, ref) {
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
				<path d="M4 15h16" />
				<path d="M4 4m0 1a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v4a1 1 0 0 1 -1 1h-4a1 1 0 0 1 -1 -1z" />
				<path d="M4 20h12" />
				{children}
			</SvgIcon>
		);
	}
);

if (__isDev__()) {
	TablerTextCaptionIcon.displayName = "TablerTextCaptionIcon";
}
