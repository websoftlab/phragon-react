import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerUmbrellaIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerUmbrellaIcon = React.forwardRef<SVGSVGElement, TablerUmbrellaIconProps>(function TablerUmbrellaIcon(
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
			<path d="M22 12a9.92 9.92 0 0 0-3.24-6.41 10.12 10.12 0 0 0-13.52 0A9.92 9.92 0 0 0 2 12Z" />
			<path d="M12 12v8a2 2 0 0 0 4 0" />
			<path d="M12 2 L12 3" />
			{children}
		</SvgIcon>
	);
});

if (__isDev__()) {
	TablerUmbrellaIcon.displayName = "TablerUmbrellaIcon";
}
