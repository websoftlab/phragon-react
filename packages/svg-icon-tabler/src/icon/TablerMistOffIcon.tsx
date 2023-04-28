import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerMistOffIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerMistOffIcon = React.forwardRef<SVGSVGElement, TablerMistOffIconProps>(function TablerMistOffIcon(
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
			<path d="M12 5h9" />
			<path d="M3 10h7" />
			<path d="M18 10h1" />
			<path d="M5 15h5" />
			<path d="M14 15h1m4 0h2" />
			<path d="M3 20h9m4 0h3" />
			<path d="M3 3l18 18" />
			{children}
		</SvgIcon>
	);
});

if (__isDev__()) {
	TablerMistOffIcon.displayName = "TablerMistOffIcon";
}
