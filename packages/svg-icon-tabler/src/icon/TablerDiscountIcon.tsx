import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerDiscountIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerDiscountIcon = React.forwardRef<SVGSVGElement, TablerDiscountIconProps>(function TablerDiscountIcon(
	props,
	ref
) {
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
			<path d="M9 15l6 -6" />
			<path d="M9,9.5a.5,.5 0 1,0 1,0a.5,.5 0 1,0 -1,0" />
			<path d="M14,14.5a.5,.5 0 1,0 1,0a.5,.5 0 1,0 -1,0" />
			<path d="M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0" />
			{children}
		</SvgIcon>
	);
});

if (__isDev__()) {
	TablerDiscountIcon.displayName = "TablerDiscountIcon";
}
