import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerHeartBrokenIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerHeartBrokenIcon = React.forwardRef<SVGSVGElement, TablerHeartBrokenIconProps>(
	function TablerHeartBrokenIcon(props, ref) {
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
				<path d="M19.5 12.572l-7.5 7.428l-7.5 -7.428a5 5 0 1 1 7.5 -6.566a5 5 0 1 1 7.5 6.572" />
				<path d="M12 6l-2 4l4 3l-2 4v3" />
				{children}
			</SvgIcon>
		);
	}
);

if (__isDev__()) {
	TablerHeartBrokenIcon.displayName = "TablerHeartBrokenIcon";
}
