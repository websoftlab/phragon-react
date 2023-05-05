import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerGiftIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerGiftIcon = React.forwardRef<SVGSVGElement, TablerGiftIconProps>(function TablerGiftIcon(props, ref) {
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
			<path d="M20 12 L20 22 L4 22 L4 12" />
			<path d="M2 7 H22 V12 H2 V7 z" />
			<path d="M12 22 L12 7" />
			<path d="M12 7H7.5a2.5 2.5 0 0 1 0-5C11 2 12 7 12 7z" />
			<path d="M12 7h4.5a2.5 2.5 0 0 0 0-5C13 2 12 7 12 7z" />
			{children}
		</SvgIcon>
	);
});

if (__isDev__()) {
	TablerGiftIcon.displayName = "TablerGiftIcon";
}
