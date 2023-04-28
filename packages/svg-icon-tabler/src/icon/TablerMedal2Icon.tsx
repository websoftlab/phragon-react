import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerMedal2IconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerMedal2Icon = React.forwardRef<SVGSVGElement, TablerMedal2IconProps>(function TablerMedal2Icon(
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
			<path d="M9 3h6l3 7l-6 2l-6 -2z" />
			<path d="M12 12l-3 -9" />
			<path d="M15 11l-3 -8" />
			<path d="M12 19.5l-3 1.5l.5 -3.5l-2 -2l3 -.5l1.5 -3l1.5 3l3 .5l-2 2l.5 3.5z" />
			{children}
		</SvgIcon>
	);
});

if (__isDev__()) {
	TablerMedal2Icon.displayName = "TablerMedal2Icon";
}
