import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerInnerShadowTopLeftFilledIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerInnerShadowTopLeftFilledIcon = React.forwardRef<
	SVGSVGElement,
	TablerInnerShadowTopLeftFilledIconProps
>(function TablerInnerShadowTopLeftFilledIcon(props, ref) {
	const { children, ...rest } = props;
	return (
		<SvgIcon
			fill="currentColor"
			strokeLinecap="round"
			strokeLinejoin="round"
			{...rest}
			ref={ref}
			size={24}
			icon={undefined}
			strokeWidth={0}
			stroke="none"
		>
			<path d="M12 2c5.523 0 10 4.477 10 10s-4.477 10 -10 10s-10 -4.477 -10 -10s4.477 -10 10 -10zm0 3a7 7 0 0 0 -7 7a1 1 0 0 0 2 0a5 5 0 0 1 5 -5a1 1 0 0 0 0 -2z" />
			{children}
		</SvgIcon>
	);
});

if (__isDev__()) {
	TablerInnerShadowTopLeftFilledIcon.displayName = "TablerInnerShadowTopLeftFilledIcon";
}
