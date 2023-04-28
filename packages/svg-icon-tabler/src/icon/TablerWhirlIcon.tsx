import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerWhirlIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerWhirlIcon = React.forwardRef<SVGSVGElement, TablerWhirlIconProps>(function TablerWhirlIcon(
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
			<path d="M14 12a2 2 0 1 0 -4 0a2 2 0 0 0 4 0z" />
			<path d="M12 21c-3.314 0 -6 -2.462 -6 -5.5s2.686 -5.5 6 -5.5" />
			<path d="M21 12c0 3.314 -2.462 6 -5.5 6s-5.5 -2.686 -5.5 -6" />
			<path d="M12 14c3.314 0 6 -2.462 6 -5.5s-2.686 -5.5 -6 -5.5" />
			<path d="M14 12c0 -3.314 -2.462 -6 -5.5 -6s-5.5 2.686 -5.5 6" />
			{children}
		</SvgIcon>
	);
});

if (__isDev__()) {
	TablerWhirlIcon.displayName = "TablerWhirlIcon";
}
