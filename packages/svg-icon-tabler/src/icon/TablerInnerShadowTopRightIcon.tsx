import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerInnerShadowTopRightIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerInnerShadowTopRightIcon = React.forwardRef<SVGSVGElement, TablerInnerShadowTopRightIconProps>(
	function TablerInnerShadowTopRightIcon(props, ref) {
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
				<path d="M12 3a9 9 0 1 0 0 18a9 9 0 0 0 0 -18z" />
				<path d="M18 12a6 6 0 0 0 -6 -6" />
				{children}
			</SvgIcon>
		);
	}
);

if (__isDev__()) {
	TablerInnerShadowTopRightIcon.displayName = "TablerInnerShadowTopRightIcon";
}
