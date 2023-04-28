import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerHelmetIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerHelmetIcon = React.forwardRef<SVGSVGElement, TablerHelmetIconProps>(function TablerHelmetIcon(
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
			<path d="M12 4a9 9 0 0 1 5.656 16h-11.312a9 9 0 0 1 5.656 -16z" />
			<path d="M20 9h-8.8a1 1 0 0 0 -.968 1.246c.507 2 1.596 3.418 3.268 4.254c2 1 4.333 1.5 7 1.5" />
			{children}
		</SvgIcon>
	);
});

if (__isDev__()) {
	TablerHelmetIcon.displayName = "TablerHelmetIcon";
}
