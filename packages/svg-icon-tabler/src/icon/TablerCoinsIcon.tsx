import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerCoinsIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerCoinsIcon = React.forwardRef<SVGSVGElement, TablerCoinsIconProps>(function TablerCoinsIcon(
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
			<path d="M9 14c0 1.657 2.686 3 6 3s6 -1.343 6 -3s-2.686 -3 -6 -3s-6 1.343 -6 3z" />
			<path d="M9 14v4c0 1.656 2.686 3 6 3s6 -1.344 6 -3v-4" />
			<path d="M3 6c0 1.072 1.144 2.062 3 2.598s4.144 .536 6 0c1.856 -.536 3 -1.526 3 -2.598c0 -1.072 -1.144 -2.062 -3 -2.598s-4.144 -.536 -6 0c-1.856 .536 -3 1.526 -3 2.598z" />
			<path d="M3 6v10c0 .888 .772 1.45 2 2" />
			<path d="M3 11c0 .888 .772 1.45 2 2" />
			{children}
		</SvgIcon>
	);
});

if (__isDev__()) {
	TablerCoinsIcon.displayName = "TablerCoinsIcon";
}
