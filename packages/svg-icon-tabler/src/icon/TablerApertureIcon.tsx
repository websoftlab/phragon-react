import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerApertureIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerApertureIcon = React.forwardRef<SVGSVGElement, TablerApertureIconProps>(function TablerApertureIcon(
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
			<path d="M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0" />
			<path d="M3.6 15h10.55" />
			<path d="M6.551 4.938l3.26 10.034" />
			<path d="M17.032 4.636l-8.535 6.201" />
			<path d="M20.559 14.51l-8.535 -6.201" />
			<path d="M12.257 20.916l3.261 -10.034" />
			{children}
		</SvgIcon>
	);
});

if (__isDev__()) {
	TablerApertureIcon.displayName = "TablerApertureIcon";
}
