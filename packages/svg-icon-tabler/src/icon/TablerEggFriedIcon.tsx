import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerEggFriedIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerEggFriedIcon = React.forwardRef<SVGSVGElement, TablerEggFriedIconProps>(function TablerEggFriedIcon(
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
			<path d="M12 12m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0" />
			<path d="M14 3a5 5 0 0 1 4.872 6.13a3 3 0 0 1 .178 5.681a3 3 0 1 1 -4.684 3.626a5 5 0 1 1 -8.662 -5a5 5 0 1 1 4.645 -8.856a4.982 4.982 0 0 1 3.651 -1.585z" />
			{children}
		</SvgIcon>
	);
});

if (__isDev__()) {
	TablerEggFriedIcon.displayName = "TablerEggFriedIcon";
}
