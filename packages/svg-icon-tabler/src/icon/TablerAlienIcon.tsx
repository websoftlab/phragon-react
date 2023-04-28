import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerAlienIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerAlienIcon = React.forwardRef<SVGSVGElement, TablerAlienIconProps>(function TablerAlienIcon(
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
			<path d="M11 17a2.5 2.5 0 0 0 2 0" />
			<path d="M12 3c-4.664 0 -7.396 2.331 -7.862 5.595a11.816 11.816 0 0 0 2 8.592a10.777 10.777 0 0 0 3.199 3.064c1.666 1 3.664 1 5.33 0a10.777 10.777 0 0 0 3.199 -3.064a11.89 11.89 0 0 0 2 -8.592c-.466 -3.265 -3.198 -5.595 -7.862 -5.595z" />
			<path d="M8 11l2 2" />
			<path d="M16 11l-2 2" />
			{children}
		</SvgIcon>
	);
});

if (__isDev__()) {
	TablerAlienIcon.displayName = "TablerAlienIcon";
}
