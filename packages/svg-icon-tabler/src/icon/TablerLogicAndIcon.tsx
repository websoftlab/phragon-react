import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerLogicAndIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerLogicAndIcon = React.forwardRef<SVGSVGElement, TablerLogicAndIconProps>(function TablerLogicAndIcon(
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
			<path d="M22 12h-5" />
			<path d="M2 9h5" />
			<path d="M2 15h5" />
			<path d="M9 5c6 0 8 3.5 8 7s-2 7 -8 7h-2v-14h2z" />
			{children}
		</SvgIcon>
	);
});

if (__isDev__()) {
	TablerLogicAndIcon.displayName = "TablerLogicAndIcon";
}
