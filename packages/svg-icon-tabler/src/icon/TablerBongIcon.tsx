import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerBongIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerBongIcon = React.forwardRef<SVGSVGElement, TablerBongIconProps>(function TablerBongIcon(props, ref) {
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
			<path d="M13 3v8.416c.134 .059 .265 .123 .393 .193l3.607 -3.609l2 2l-3.608 3.608a5 5 0 1 1 -6.392 -2.192v-8.416h4z" />
			<path d="M8 3h6" />
			<path d="M6.1 17h9.8" />
			{children}
		</SvgIcon>
	);
});

if (__isDev__()) {
	TablerBongIcon.displayName = "TablerBongIcon";
}
